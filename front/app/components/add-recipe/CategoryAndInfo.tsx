// CategoryAndInfo.tsx
import React, { ChangeEvent, FunctionComponentElement } from "react";
import styled from "styled-components";

type Props = {
  selectedCategory: string;
  handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedPeople: string;
  handlePeopleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedTime: string;
  handleTimeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedDifficulty: string;
  handleDifficultyChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  categories: string[];
  peopleCount: number[];
  times: string[];
  difficulties: string[];
};

const CategoryAndInfo = ({
  selectedCategory,
  handleCategoryChange,
  selectedPeople,
  handlePeopleChange,
  selectedTime,
  handleTimeChange,
  selectedDifficulty,
  handleDifficultyChange,
  categories,
  peopleCount,
  times,
  difficulties,
}: Props): FunctionComponentElement<Props> => {
  return (
    <>
      <InfoSection>
        <LabelWithInfo>
          <Label>카테고리</Label>
          <Info>
            <Select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="" disabled hidden>
                종류
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </Info>
        </LabelWithInfo>
      </InfoSection>
      <InfoSection>
        <LabelWithInfo>
          <Label>요리정보</Label>
          <Info>
            <Select value={selectedPeople} onChange={handlePeopleChange}>
              <option value="" disabled hidden>
                인원
              </option>
              {peopleCount.map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </Select>
            <Select value={selectedTime} onChange={handleTimeChange}>
              <option value="" disabled hidden>
                시간
              </option>
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
            <Select
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <option value="" disabled hidden>
                난이도
              </option>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </Select>
          </Info>
        </LabelWithInfo>
      </InfoSection>
    </>
  );
};

export default CategoryAndInfo;

const Label = styled.label`
  width: 8.8rem;
  height: 2.1rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 2.1rem;
  color: #4f3d21;
  margin-right: 3rem;
  padding-top: 0.5rem;
`;

const Select = styled.select`
  box-sizing: border-box;
  width: 13.5rem;
  height: 3.6rem;
  border: 0.1rem solid #d9d9d9;
  border-radius: 5rem;
  padding-left: 1rem;
  margin: 0.5rem 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.9rem;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

const LabelWithInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
