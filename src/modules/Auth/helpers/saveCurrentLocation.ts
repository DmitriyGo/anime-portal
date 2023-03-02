import { SAVED_ROUTE_LOCATION_DATA_STORAGE_KEY } from '@/constants/common';

const saveCurrentLocation = ({
  pathname,
  query,
}: {
  pathname: string;
  query: unknown;
}) => {
  try {
    const routeData = JSON.stringify({ pathname, query });
    window.localStorage.setItem(
      SAVED_ROUTE_LOCATION_DATA_STORAGE_KEY,
      routeData,
    );
  } catch (err) {}
};

export default saveCurrentLocation;
