import { ChangeEventHandler, useRef } from 'react';
import useUploadVideo from '../hook/useUploadVideo';
import { ErrorUI } from '@/features/browse/components/ErrorUI';

function UploadForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync, isLoading, error } = useUploadVideo();

  const handleUpload: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (!event.target.files) {
      throw new Error('No file selected');
    }

    const file = event.target.files[0];

    await mutateAsync({
      index_id: '641d53987b1f2230dfcd6c03',
      file,
    });

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  console.log(error);

  return (
    <>
      <label>
        <div>{isLoading ? 'Uploading...' : 'Upload Video'}</div>
        <input
          accept="video/*"
          type="file"
          className="invisible"
          onChange={handleUpload}
          disabled={isLoading}
          ref={inputRef}
        />
      </label>
      {error && <ErrorUI message={error.message} />}
    </>
  );
}

export default UploadForm;
