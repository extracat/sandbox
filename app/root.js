const user = {
  name: 'Hedy Lamar',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 80,
};

export function Root() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
