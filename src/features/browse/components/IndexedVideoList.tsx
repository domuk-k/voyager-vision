import useIndexedVideoList from '../hooks/useIndexedVideoList';
import { ErrorUI } from './ErrorUI';
import IndexedVideoItem from './IndexedVideoItem';

interface IndexedVideoListProps {
  indexId: string;
}

function IndexedVideoList({ indexId }: IndexedVideoListProps) {
  const { data, status, refetch, error } = useIndexedVideoList({
    indexId,
  });

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return <ErrorUI message={error.message} onRefetch={refetch} />;
  }

  if (!data) return null;

  return (
    <ul>
      {data.map((video) => (
        <IndexedVideoItem video={video} key={video._id} />
      ))}
    </ul>
  );
}

export default IndexedVideoList;
