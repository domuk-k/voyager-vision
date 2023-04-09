import useIndexedVideoList from '../hooks/useIndexedVideoList';
import IndexedVideoItem from './IndexedVideoItem';

function IndexedVideoList() {
  const { data, status } = useIndexedVideoList({
    indexId: '641d53987b1f2230dfcd6c03',
  });

  if (status === 'loading') {
    return null;
  }

  return (
    <ul>
      {data?.map((video) => (
        <IndexedVideoItem video={video} key={video._id} />
      ))}
    </ul>
  );
}

export default IndexedVideoList;
