export async function getServerSideProps() {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=10&playlistId=PLSJxovi1IyDGkHNqlrPSU2kXu1aophIkG&key=AIzaSyBuPaBnOxJcNNf6GgsHX-ps-B_XwUt-LtQ`)
  const data = await res.json();
  return {
      data
  }
}