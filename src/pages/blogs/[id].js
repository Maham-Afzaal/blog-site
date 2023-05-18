import { Container, Typography,Box } from '@mui/material';
import { useRouter } from 'next/router';

const DynamicPage = ({getData}) => {
  const router = useRouter();
  // const { blogsId } = router.query;
  // const passedData = router.query.items ? JSON.parse(router.query.items) : null;
  console.log('getdata', getData)

  return (
    <Box sx={{backgroundColor:'#F6F1F1',minHeight:'100vh'}}>
    <Container maxWidth='md'>
      <Box sx={{padding:5}}>
        <Typography variant='h3' gutterBottom>{getData?.title}</Typography>
        <Typography variant='h4' gutterBottom>{getData?.body}</Typography>
      </Box>
    </Container>
    </Box>
  );
};

export default DynamicPage;

export const getStaticPaths= async()=>{
  const apiUrl = 'https://dummyjson.com/posts';
  const res = await fetch(apiUrl);
  const data = await res.json();
  const paths=data.posts.map(item=>{
    return{
      params:{id: item.id.toString()},
    }
  })
return{
  paths,
  fallback:false,
}
}

export const getStaticProps=async(context)=>{
  const slug=context.params.id;
  const apiUrl = 'https://dummyjson.com/posts';
  const res = await fetch(apiUrl);
  const data = await res.json();

  const getData=data.posts.filter(item=>item.id==slug)[0]
  return{
    props:{
      getData,
    },
  }

}