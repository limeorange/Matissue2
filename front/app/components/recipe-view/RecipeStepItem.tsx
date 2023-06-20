import styled, { css } from "styled-components";
import Image from "next/image";

type RecipeStepProps = {
  stepNumber: number;
  stepImage: string;
  lastStep: number;
  stepDescription: string;
};

// 레시피 단일 단계 컴포넌트
const RecipeStep = ({
  stepNumber,
  stepImage,
  lastStep,
  stepDescription,
}: RecipeStepProps) => {
  // 마지막 단계일 경우 점선 빼주기 위함
  const isLastStep = stepNumber === lastStep;

  return (
    <>
      <ContainerDiv>
        {/* 단계 숫자, 점선 */}
        <StepNavigationDiv>
          <RoundedStepDiv>
            <h3>{stepNumber}</h3>
          </RoundedStepDiv>
          <StepDotDiv isLastStep={isLastStep}></StepDotDiv>
        </StepNavigationDiv>

        <StepContentDiv>
          {/* 요리 과정 사진 */}
          <ImageWrapperDiv>
            <Image
              src={stepImage}
              alt={`step${stepNumber}`}
              fill
              style={{ objectFit: "cover", borderRadius: 20 }}
            />
          </ImageWrapperDiv>

          {/* 요리 과정 설명 */}
          <StepDescriptionDiv>{stepDescription}</StepDescriptionDiv>
        </StepContentDiv>
      </ContainerDiv>
    </>
  );
};

/** 전체 감싸는 Div */
const ContainerDiv = styled.div`
  display: flex;
  gap: 1.5rem;
`;

/** 요리 단계 네이게이션 디자인 Div */
const StepNavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

/** 요리 단계 숫자 동그라미 배경 Div */
const RoundedStepDiv = styled.div`
  display: flex;
  background-color: #fbe2a1;
  min-height: 3.5rem;
  width: 3.5rem;
  border-radius: 10rem;
  align-items: center;
  justify-content: center;

  h3 {
    font-size = 20px;
    color: #A17C43;
  }
`;

/** 요리 단계 점선 Div */
const StepDotDiv = styled.div<{ isLastStep: boolean }>`
  /* 기본 스타일 */
  border-right-width: 0.25rem;
  border-right-color: #ababab;
  border-right-style: dotted;
  height: 100%;
  width: 1.9rem;
  margin-top: 0.3rem;

  /* isLastStep이 true인 경우 스타일 변경 */
  ${({ isLastStep }) =>
    isLastStep &&
    css`
      display: none;
    `}
`;

/** 요리 과정 이미지 감싸는 Div */
const ImageWrapperDiv = styled.div`
  width: 29rem;
  height: 29rem;
  position: relative;
`;

/** 요리 과정 설명 Div */
const StepDescriptionDiv = styled.div`
  width: 30rem;
  font-size: 16px;
`;

/** 요리 사진, 과정 묶는 Div */
const StepContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  gap: 1.5rem;
  padding-bottom: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default RecipeStep;
