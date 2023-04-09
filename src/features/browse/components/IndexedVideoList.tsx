import useIndexedVideoList from '../hooks/useIndexedVideoList';
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

function ErrorUI({
  message,
  onRefetch,
}: {
  message: string;
  onRefetch: () => void;
}) {
  return (
    <div>
      <div>There is Error. Please try again later.</div>
      <button type="button" onClick={onRefetch}>
        Try Again
      </button>
      <details>
        <summary>Raw Error details</summary>
        {message}
      </details>
    </div>
  );
}

export default IndexedVideoList;
