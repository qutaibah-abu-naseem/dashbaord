import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AvatarGroup from '@mui/material/AvatarGroup';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

export default function Cart() {
    return (
        <Card className='p-2' sx={{ maxWidth: 345, backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                sx={{ height: '150px', borderRadius: '10px' }}
                image="/image/img-project.webp"
            />
            <CardContent>
                <Typography gutterBottom component="div">
                    <p className='m-0 text-[10px] text-zinc-500 dark:text-zinc-400'>project #1</p>
                    <p className='m-0 font-bold text-[15px] text-zinc-900 dark:text-zinc-100'>Modern</p>
                </Typography>
                <Typography className='text-zinc-700 dark:text-zinc-300' variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <div className='flex items-center justify-between'>
                <button className='px-4 py-[2px] text-[10px] text-zinc-800 dark:text-zinc-200 border-2 border-zinc-800 dark:border-zinc-100  rounded-full'>View All</button>
               <AvatarGroup spacing={10}>
  <Avatar
    alt="Remy Sharp"
    src="/image/my-phote.webp"
    sx={{ width: 15, height: 15 }} // <-- تحكم بالحجم هنا
  />
  <Avatar
    alt="Travis Howard"
    src="/image/my-phote.webp"
    sx={{ width: 15, height: 15 }}
  />
  <Avatar
    alt="Cindy Baker"
    src="/image/my-phote.webp"
    sx={{ width: 15, height: 15 }}
  />
</AvatarGroup>

            </div>
        </Card>
    );
}
