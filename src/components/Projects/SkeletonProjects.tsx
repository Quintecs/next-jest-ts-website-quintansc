import { Skeleton } from "@mui/material";

export default function SkeletonProject() {
    return (
        <div style={{ width: "100%", padding: '20px', marginBottom: '10px' }}>
            <Skeleton variant='rectangular' style={{ backgroundColor: '#eee', height: '300px', marginBottom: '8px', width: '100%' }}></Skeleton>
            <Skeleton variant="rectangular" style={{ backgroundColor: '#eee', height: '50px', width: '100%' }}></Skeleton>
        </div>
    )
};