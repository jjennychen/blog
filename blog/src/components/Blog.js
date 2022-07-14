import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
// import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const sections = [
  { title: 'Taipei 101', url: 'https://en.wikipedia.org/wiki/Taipei_101' },
  { title: 'Taipei Live View', url: 'https://www.youtube.com/watch?v=z_fY1pj1VBw' },
  { title: 'Technology', url: 'https://en.wikipedia.org/wiki/TSMC' },
  { title: 'Culture', url: 'https://www.britannica.com/place/Taiwan/Cultural-life' },
  // { title: 'Business', url: '#' },
  { title: 'Politics', url: 'https://en.wikipedia.org/wiki/Political_status_of_Taiwan' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  { title: 'Health', url: 'https://en.wikipedia.org/wiki/Healthcare_in_Taiwan' },
  // { title: 'Style', url: '#' },
  { title: 'Travel', url: 'https://eng.taiwan.net.tw/m1.aspx?sNo=0000218' },
];

const mainFeaturedPost = {
  title: 'Taiwan',
  description:
    "Taiwan is a semi-tropical island in East Asia with densed population and resources.",
  image: 'https://pbs.twimg.com/media/CNeBMmRWsAA1fF3.jpg',
  imageText: 'main image description',
  linkText: 'Wikipedia',
};

const featuredPosts = [
  {
    title: 'Night Markets',
    date: 'June 12',
    description:
      'Taiwanese night markets are street markets in Taiwan that operate in urban or suburban areas between sunset and sunrise.',
    image: 'https://s.yimg.com/ny/api/res/1.2/amdqzPFFmPCqJxUW28nY_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://s.yimg.com/uu/api/res/1.2/23RsDVaj1xVQCd5IDTMQzg--~B/aD05MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/zh-tw/nownews.com/1538dfd8630f19f4505970e6ec27867a',
    imageLabel: 'Night Market',
    link: 'https://eng.taiwan.net.tw/m1.aspx?sNo=0002040',
  },
  {
    title: 'Temples',
    date: 'July 11',
    description:
      'There are a lot of beautiful temples with long history in Taiwan. They are not only for worship but also for valuable community gatherings.',
    image: 'https://www.mirrormedia.com.tw/assets/images/20210128144226-435052386775edd17f5cb5c559da092e-desktop.jpg',
    imageLabel: 'Temples',
    link: 'https://www.travel.taipei/en/pictorial/article/19559',
  },
  {
    title: 'Fruits',
    date: 'July 13',
    description:
      'With tropical marine climate, Taiwan has a large verity of high-quality fruits, and this makes Taiwan \'The Kingdom of Fruit\'.',
    image: 'https://doqvf81n9htmm.cloudfront.net/data/veronicali_132/605/shutterstock_721170481.jpg',
    imageLabel: 'Fruits',
    link: 'https://ezgo.coa.gov.tw/Fruit/EN/Season_Fruits_All',
  },
  {
    title: 'Street Food',
    date: 'July 15',
    description:
      'Taiwanese street food is one of the most wellknown things about Taiwan. Click on this post to see a list of must-eat street food.',
    image: 'https://englishlive.ef.com/zh-tw/blog/wp-content/uploads/sites/15/2018/04/shutterstock_446427760.jpg',
    imageLabel: 'Street Food',
    link: 'https://www.travel.taipei/en/must-visit/snacks-top10',
  },
  {
    title: 'Cram School Culture',
    date: 'July 17',
    description:
      'Cram School is a vital part of students\' life in Taiwan. They spend most of their time in cram school to study and prepare for exams.',
    image: 'https://images.chinatimes.com/newsphoto/2018-01-17/656/A06A00_P_01_01.jpg',
    imageLabel: 'Cram School',
    link: 'https://taiwantefl.com/what-are-cram-schools-in-taiwan/',
  },
  {
    title: 'Taipei 101',
    date: 'July 19',
    description:
      'Taipei 101 is a supertall skyscraper located in the Xinyi District of Taipei, Taiwan. Designed to resemble an enormous bamboo stalk, it has a height of 508 m and comprises 101 storeys above ground, and 5 levels below ground.',
    image: 'https://s3.amazonaws.com/images.skyscrapercenter.com/thumbs/2739_500x650.jpg',
    imageLabel: 'Image Text',
    link: 'https://www.taipei-101.com.tw/en/',
  },
];

// const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Taiwan" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      <Footer
        // title="Footer"
        description="A blog about Taiwan!"
      />
    </ThemeProvider>
  );
}
