function Welcome({ isLogined }) {
  //   if (isLogined) {
  //     return <h1>Welcome Users!</h1>;
  //   }
  //   else
  //     return <h1>Error</h1>

  //   return isLogined ? <h1>Welcome Users!</h1> : <h1>Error</h1>;

  return isLogined && <h1>Welcome Users!</h1>;
}

export default Welcome;
