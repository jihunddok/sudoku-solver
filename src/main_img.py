from src.grid_solver import main_solve_grid
from src.grid_detector import main_grid_detector_img
from src.extract_digits import process_extract_digits
from src.new_img_generator import *
import os
import cv2
from keras.models import load_model
import tensorflow as tf
import sys
import time

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
tf.logging.set_verbosity(tf.logging.ERROR)


def main_process_img(im_path, save=False):
    init = time.time()
    model = load_model('model/model_99_3.h5')
    frame = cv2.imread(im_path)
    init0 = time.time()
    if frame is None:
        print("This path doesn't lead to a frame")
        sys.exit(3)
    im_grid_final, M = main_grid_detector_img(frame)
    found_grid_time = time.time()
    grid = process_extract_digits(im_grid_final, model)
    extract_time = time.time()
    grid_solved = main_solve_grid(grid)

    if grid_solved is None:
        cv2.imshow('grid_extract', im_grid_final)
        cv2.imwrite(os.path.splitext(im_path)[0] + "_failed.jpg", im_grid_final)
        cv2.waitKey()
        sys.exit(3)

    solve_time = time.time()

    im_filled_grid = write_solved_grid(im_grid_final, grid, grid_solved)
    im_final = recreate_img(frame, im_filled_grid, M)
    final_time = time.time()

    if save:
        cv2.imwrite(os.path.splitext(im_path)[0] + "_solved.jpg", im_final)

    else:
        total_time = final_time - init

        load_time = init0 - init
        print("Load everything \t{:.1f}% - {:.3f}s".format(100*load_time/total_time,load_time))
        founding_time = found_grid_time - init0
        print("Grid Research \t\t{:.1f}% - {:.3f}s".format(100*founding_time/total_time,founding_time))
        extraction_duration = extract_time - found_grid_time
        print("Digits Extraction \t{:.1f}% - {:.3f}s".format(100*extraction_duration/total_time,extraction_duration))
        solving_duration = solve_time - extract_time
        print("Grid Solving \t\t{:.1f}% - {:.3f}s".format(100*solving_duration/total_time,solving_duration))
        recreation_duration  = final_time - solve_time
        print("Image recreation \t{:.1f}% - {:.3f}s".format(100*recreation_duration/total_time,recreation_duration))
        print("EVERYTHING DONE \t{:.2f}s".format(total_time))
        print(grid_solved)
        cv2.imshow('im', frame)
        cv2.imshow('grid_extract', im_grid_final)
        cv2.imshow('grid_filled', im_filled_grid)
        cv2.imshow('im_final', im_final)
        cv2.waitKey()


if __name__ == '__main__':
    im_path = "images/sudoku1.jpg"
    main_process_img(im_path,save=False)