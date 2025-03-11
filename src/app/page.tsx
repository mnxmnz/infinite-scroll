import AutoLoadMoreList from '@/components/AutoLoadMoreList';
import ManualLoadMoreList from '@/components/ManualLoadMoreList';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <AutoLoadMoreList />
      </div>
      <div style={{ width: '50%' }}>
        <ManualLoadMoreList />
      </div>
    </main>
  );
}
