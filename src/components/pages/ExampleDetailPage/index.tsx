import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { isNaN } from 'lodash-es';

import styled from 'styled-components';

import UpDownButton from 'components/molecules/buttons/UpDownButton';

const Root = styled.div``;

export default function ExampleDetailPage(): JSX.Element {
  const navigate = useNavigate();

  const { exampleId } = useParams();

  const [startingPage, setStartingPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const onPageMoveButtonChagne = useCallback((value: number): void => {
    setPage(value);
  }, []);

  useEffect(() => {
    const exampleIdNumber = Number(exampleId);
    const isPageZero = exampleIdNumber === 0;
    const isExampleIdNotNan = !isNaN(exampleIdNumber);

    if (isPageZero) {
      navigate('/example');
    } else if (isExampleIdNotNan) {
      setStartingPage(exampleIdNumber);
      setPage(exampleIdNumber);
    }
  }, []);

  useEffect(() => {
    if (page === 0) {
      navigate('/example');
    } else {
      navigate(`/example/${page}`);
    }
  }, [navigate, page]);

  return (
    <Root>
      ExampleDetailPage
      {`[${exampleId}]`}
      <UpDownButton
        propNumber={startingPage}
        max={10}
        min={0}
        onChange={onPageMoveButtonChagne}
      />
    </Root>
  );
}
