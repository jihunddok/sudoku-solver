# Sudoku Solver (toy project)

## 프로그램 소개
- 사용 환경
    - OpenCv Python3 tensorflow keras
- 개요
    - https://github.com/neeru1207/AI_Sudoku의 스도쿠 풀이 프로젝트를 가져와 정확도를 올리는 것이 목적인 프로젝트임.
    - OpenCv와 tensorflow를 이용하여 영상처리 시스템의 작동과정에 대해 학습하기위해 진행한 Toy Project임.
    - 영상으로 입력된 스도쿠 문제를 인식하여 정답을 도출해 내는 프로그램임.
    - 스도쿠 문제를 인식하기 위해 OpenCv를 통한 전처리 과정을 거쳤으며, 학습된 결과에 따라 전처리 방식을 조금씩 수정하며 인식률을 개선하였음.
    - 개발 당시 입력 영상에서 openCV ocr을 통해 숫자인식을 하고있었기에, MNIST 데이터셋을 학습모델에 추가시켜 OpenCV 로 전처리 된 이미지에서
      숫자를추출하고자 하였음.
