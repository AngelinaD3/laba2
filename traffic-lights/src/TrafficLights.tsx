import Light from './Light';

const TrafficLights = () => {
  return (
    <div>
      {/* Горизонтальный светофор */}
      <div style={{ display: 'flex' }}>
        <Light tlColor="red" />
        <Light tlColor="yellow" />
        <Light tlColor="green" />
      </div>

      {/* Вертикальный светофор */}
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
        <Light tlColor="red" />
        <Light tlColor="yellow" />
        <Light tlColor="green" />
      </div>
    </div>
  );
};

export default TrafficLights;