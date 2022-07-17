import {StyleSheet} from 'react-native';
import React from 'react';
import useFetch from '../../services/useFetch';
import TemplateNewsList from '../../components/TemplateNewsList';

const Health = () => {
  const {data, error, loading, onRefresh, setOnRefresh} = useFetch('health');
  console.log('data', data);
  console.log('error', error);
  console.log('loading', loading);

  return (
    <TemplateNewsList
      data={data?.articles}
      error={error}
      loading={loading}
      onRefresh={onRefresh}
      setOnRefresh={setOnRefresh}
    />
  );
};

export default Health;

const styles = StyleSheet.create({});
