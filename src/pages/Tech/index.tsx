import {StyleSheet} from 'react-native';
import React from 'react';
import useFetch from '../../services/useFetch';
import TemplateNewsList from '../../components/TemplateNewsList';

const Tech = () => {
  const {data, error, loading, onRefresh, setOnRefresh} = useFetch('tech');
  console.log('data', data);
  console.log('error', error);
  console.log('loading', loading);
  console.log('onRefresh', onRefresh);

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

export default Tech;

const styles = StyleSheet.create({});
