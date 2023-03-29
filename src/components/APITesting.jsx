function APITesting() {
        fetch(
          `https://links.api.jobtechdev.se/joblinks?country=i46j_HmG_v64&q=Software%20Developer&offset=0&limit=10`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data.hits);
          });
}

export default APITesting