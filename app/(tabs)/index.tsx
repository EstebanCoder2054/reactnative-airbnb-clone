import { View } from 'react-native'
import React, { useState, useMemo } from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import ListingsMap from '@/components/ListingsMap'
import ListingsData from '@/assets/data/airbnb-listings.json';
import ListingsDataGeo from '@/assets/data/airbnb-listings.geo.json';

const Page = () => {
  // It's a good practice and pattern to control the data and renders of the child components from the parent
  const [category, setCategory] = useState('Tiny homes'); // The first item
  const items = useMemo(() => {
    // Filter out items without a medium_url
    return ListingsData.filter(item => item.medium_url);
  }, [ListingsData]);

  const geoItems = useMemo(() => ListingsDataGeo ,[]);

  const onDataChanged = (category: string) => {
    setCategory(category);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChange={onDataChanged}/>
      }}/>

      {/* <Listings listings={items} category={category}/> */}
      <ListingsMap listings={geoItems}/>
    </View>
  )
}

export default Page