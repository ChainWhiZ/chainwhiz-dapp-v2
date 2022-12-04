import React from 'react';
import Image from 'next/image';
import {
  PaginationWrapper,
  PaginationContainer,
} from '../submission/submission.styled';

export default function pagination() {
  return (
    <PaginationContainer>
      <PaginationWrapper>
        <aside>
          <Image
            className="back"
            src="/images/exportbounty/backarrow.png"
            width={5.33}
            height={10.67}
          />
        </aside>
        <div>
          Page<p>6</p>of<p>20</p>
        </div>
        <aside>
          <Image
            className="next"
            src="/images/exportbounty/nextarrow.png"
            width={5.33}
            height={10.67}
          />
        </aside>
      </PaginationWrapper>
    </PaginationContainer>
  );
}
