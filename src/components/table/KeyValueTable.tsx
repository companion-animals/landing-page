import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  className?: string;
  data: TableRowProps[];
}

export interface TableRowProps {
  key: React.ReactNode;
  value: React.ReactNode;
}

const KeyValueContainer = styled.div`
  ${tw`
		flex
		flex-col
	`}
`;

const Row = styled.div`
  ${tw`
		w-full
		flex
		flex-row
		justify-between
		py-1
		text-sm
		text-gray-500
	`}
`;

const Key = styled.div``;

const Value = styled.div``;

const KeyValueTable = ({ className, data }: Props) => (
  <KeyValueContainer className={className}>
    {data.map(({ key, value }) => (
      <Row>
        <Key>{key}</Key>
        <Value>{value}</Value>
      </Row>
    ))}
  </KeyValueContainer>
);

export default KeyValueTable;
