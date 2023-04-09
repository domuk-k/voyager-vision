import { ChangeEventHandler } from 'react';
import useUploadVideo from '../hook/useUploadVideo';

function UploadForm() {
  const { mutateAsync } = useUploadVideo();

  const handleUpload: ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (!event.target.files) {
      throw new Error('No file selected');
    }

    const file = event.target.files[0];

    await mutateAsync({
      index_id: '641d53987b1f2230dfcd6c03',
      file,
    });
  };

  return (
    <>
      <label>
        <span>Upload Video</span>
        <input type="file" onChange={handleUpload} />
      </label>
    </>
  );
}

export default UploadForm;
