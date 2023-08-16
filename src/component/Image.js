const Image = ({ data }) => {
  return (
    <a href={data.cover_photo.urls.regular} target="_blank">
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.cover_photo.urls.small}
        alt={data.alt_description}
      />
    </a>
  );
};

export default Image;
