import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const { data: searchResult, loading, error, fetchData } = useFetch();

  const userValue = useMemo(() => ({
    userName,
    setUserName,
    searchResult,
    loading,
    error,
    fetchData,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [userName, searchResult, loading, error]);

  return (
    <context.Provider value={ userValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
