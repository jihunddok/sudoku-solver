# Sudoku Solver (toy project)

## 프로그램 소개
- 사용 환경
    - OpenCv Python3 tensorflow keras
- 개요
    - OpenCv와 tensorflow를 이용하여 영상처리 시스템의 작동과정에 대해 학습하기위해 진행한 Toy Project임.
    - 영상으로 입력된 스도쿠 문제를 인식하여 정답을 도출해 내는 프로그램임.
    - 스도쿠 문제를 인식하기 위해 OpenCv를 통한 전처리 과정을 거쳤으며, 학습된 결과에 따라 전처리 방식을 조금씩 수정하며 인식률을 개선하였음.
    - 그리드 내부의 디지털 숫자 인식은 OpenCv의 OCR보다는 왜곡될 수 있는 스도쿠 영상임을 감안하여 Mnist 학습모델을 가져와 사용하였음.