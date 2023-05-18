import { Box, Button, Chip, Grid, Paper, Typography, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import React from 'react';

const Home = ({ items }) => {
  const router = useRouter();

  const clickedBtn = (itemId) => {
    router.push(`/blogs/${itemId}`);
  };

  return (
    <Container>
      <div>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 4, md: 5 }}>
          {items.map((item) => (
            <Grid item xs={12} md={6} lg={6} key={item.id}>
              <Box sx={{ height: '100%', boxShadow: 3 }}>
                <Stack alignItems={'flex-start'} justifyContent={'center'} spacing={1} sx={{p: '16px 24px'}}>
                  <Stack style={{ textAlign: 'center' }}>
                    <Box sx={{ alignItems: 'center', justifyContent: 'flex-start', display: 'flex', gap: 2, }}>
                      {item.tags?.map((tag) => (
                        <Chip variant='outlined' color='primary' key={tag} style={{ textAlign: 'center' }} label={tag} />
                      ))}
                    </Box>
                  </Stack>
                  <Stack>
                    <h2 style={{ textAlign: 'center' }}>{item.titles}</h2>
                  </Stack>
                  <Stack>
                    <Typography padding={0} margin={0} variant="body2">{item.body.slice(0, 150)}.....</Typography>
                  </Stack>
                  <Stack>
                    <Button onClick={() => clickedBtn(item.id)} color='primary' variant="outlined" size='small'>
                      Learn More
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
export async function getStaticProps() {
  const apiUrl = 'https://dummyjson.com/posts';
  const res = await fetch(apiUrl);
  const data = await res.json();
  const items = data.posts.map((item) => ({
    id: item.id,
    titles: item.title,
    body: item.body,
    tags: item.tags,
  }));
  return {
    props: { items },
  };
}
