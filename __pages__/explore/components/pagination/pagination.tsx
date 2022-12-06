import React from 'react';
import { voidFunction } from 'utils/constants';
import {
  PaginationContainer,
  PaginationButton,
  PaginationContent,
} from './pagination.styled';

export default function Pagination({
  currentPage = 0,
  totalPages = 10,
  onNext = voidFunction,
  onPrev = voidFunction,
}) {
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={onPrev}
        icon="/images/exportbounty/backarrow.png"
      />
      <PaginationContent>
        Page <span>{currentPage}</span> of <span> {totalPages}</span>
      </PaginationContent>
      <PaginationButton
        onClick={onNext}
        icon="/images/exportbounty/nextarrow.png"
      />
    </PaginationContainer>
  );
}
