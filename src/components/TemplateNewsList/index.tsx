import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo} from 'react';
import globalStyles from '../../styles/globalStyles';
import {useRoute} from '@react-navigation/native';
import {GREY4, RED, WHITE} from '../../styles/colors';
import {ArticleProps} from '../../types/interfaces';
import Card from '../Card';
import {percentageWidth} from '../../services/utils/screen_size';
import Spacer from '../Spacer';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TemplateNewsListProps {
  data: Array<ArticleProps> | undefined;
  error: string;
  loading: boolean;
  onRefresh: boolean;
  setOnRefresh: (val: boolean) => void;
}

const TemplateNewsList = (props: TemplateNewsListProps) => {
  const {data, error, loading, onRefresh, setOnRefresh} = props;
  const route = useRoute();

  if (error) {
    return (
      <View
        style={[
          globalStyles.displayFlex,
          globalStyles.justifyCenter,
          globalStyles.alignCenter,
          {backgroundColor: WHITE},
        ]}>
        <Text style={globalStyles.headingBold.h3}>Fetching Error</Text>
      </View>
    );
  }

  const ReturnIndex = (index: number) => {
    if (index % 4 === 0) {
      return index;
    }
  };

  const renderItem: ListRenderItem<ArticleProps> = ({item, index}) => (
    <Card
      viewStyle={[
        index !== ReturnIndex(index)
          ? styles.cardContainerRow
          : styles.cardContainer,
      ]}>
      <View style={index !== ReturnIndex(index) ? globalStyles.row : {}}>
        <Image
          defaultSource={{uri: 'https://m.nsoproject.com/webfile/no_image.png'}}
          source={{
            uri:
              item.urlToImage === null
                ? 'https://m.nsoproject.com/webfile/no_image.png'
                : item.urlToImage,
          }}
          style={
            index !== ReturnIndex(index) ? styles.imageCard2 : styles.imageCard
          }
        />
        {index === 0 && <Spacer height={20} />}

        <View style={[globalStyles.displayFlex, styles.description]}>
          <Spacer height={5} />
          <Text numberOfLines={3} style={globalStyles.headingBold.h3}>
            {item.title}
          </Text>
          <Spacer height={10} />

          <View
            style={[
              globalStyles.displayFlex,
              globalStyles.row,
              globalStyles.justifySpaceBetween,
              globalStyles.alignCenter,
            ]}>
            <View
              style={[
                globalStyles.displayFlex,
                index === ReturnIndex(index) ? globalStyles.row : {},
                index === ReturnIndex(index) && globalStyles.alignCenter,
              ]}>
              <Text style={[globalStyles.bodyRegular.body2, {color: GREY4}]}>
                {moment(item.publishedAt).fromNow()}
              </Text>
              {index === ReturnIndex(index) && (
                <>
                  <Spacer width={5} />
                  <View style={styles.lineDivider} />
                  <Spacer width={5} />
                </>
              )}
              <Text style={[globalStyles.bodyRegular.body1, {color: RED}]}>
                {item.source.name}
              </Text>
            </View>
            <MaterialIcons name="more-horiz" color={RED} size={24} />
          </View>
          {index !== ReturnIndex(index) && <Spacer height={10} />}
        </View>
      </View>
    </Card>
  );

  return (
    <View
      style={[
        globalStyles.displayFlex,
        globalStyles.horizontalDefaultPadding,
        globalStyles.verticalDefaultPadding,
        {backgroundColor: WHITE},
      ]}>
      <View
        style={[
          globalStyles.row,
          globalStyles.alignCenter,
          globalStyles.justifySpaceBetween,
        ]}>
        <Text style={[globalStyles.headingBold.h1, {color: RED}]}>
          {route.name} News
        </Text>
        <Ionicons name="notifications" size={24} color={RED} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.author + Math.random().toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={onRefresh}
              onRefresh={() => setOnRefresh(true)}
            />
          }
        />
      )}
    </View>
  );
};

export default TemplateNewsList;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 8,
    marginVertical: 16,
    paddingBottom: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContainerRow: {
    marginHorizontal: 8,
    marginVertical: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  imageCard: {width: '100%', height: 200, overflow: 'hidden'},
  imageCard2: {width: 100, height: '100%', overflow: 'hidden'},
  description: {
    paddingHorizontal: percentageWidth(2),
  },
  lineDivider: {width: 1, height: 15, backgroundColor: GREY4},
});
