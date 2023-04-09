function VideoListItemLayout({ children }: { children: React.ReactNode }) {
  return (
    <ul className="max-w-sm text-[10px] flex flex-col p-3 bg-white border border-gray-200 rounded-md">
      {children}
    </ul>
  );
}

export default VideoListItemLayout;
