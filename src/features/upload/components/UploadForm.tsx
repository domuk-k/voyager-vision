import { ChangeEventHandler, useRef } from 'react';
import useUploadVideo from '../hook/useUploadVideo';

function UploadForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync, isLoading } = useUploadVideo();

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

  return (
    <>
      <label>
        <span>Upload Video</span>
        <input
          accept="video/*"
          type="file"
          onChange={handleUpload}
          disabled={isLoading}
          ref={inputRef}
        />
      </label>
    </>
  );
}

export default UploadForm;
