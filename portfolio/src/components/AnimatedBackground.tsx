import { JSX, useMemo } from 'react';

interface PathConfig {
  yBase: number;
  amplitude: number;
  frequency: number;
  phase: number;
}

function generateLayerPaths(count: number, configs: PathConfig[]): string[] {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const { yBase, amplitude, frequency, phase } = configs[i % configs.length];
    let d = `M -200 ${yBase}`;
    for (let x = -180; x <= 1700; x += 40) {
      const y =
        yBase +
        Math.sin(x * frequency + phase + i * 0.8) * amplitude * 1.2 +
        Math.sin(x * frequency * 2.3 + phase * 1.7 + i * 1.2) * amplitude * 0.4 +
        Math.sin(x * frequency * 0.4 + phase * 0.3 + i * 0.5) * amplitude * 0.6;
      d += ` L ${x} ${y}`;
    }
    paths.push(d);
  }
  return paths;
}

const layer1Configs: PathConfig[] = [
  { yBase: 80, amplitude: 18, frequency: 0.0025, phase: 0 },
  { yBase: 260, amplitude: 22, frequency: 0.003, phase: 1.2 },
  { yBase: 440, amplitude: 16, frequency: 0.0028, phase: 2.5 },
  { yBase: 620, amplitude: 20, frequency: 0.0032, phase: 3.8 },
  { yBase: 800, amplitude: 14, frequency: 0.0026, phase: 5.0 },
];

const layer2Configs: PathConfig[] = [
  { yBase: 150, amplitude: 25, frequency: 0.004, phase: 0.5 },
  { yBase: 370, amplitude: 28, frequency: 0.0045, phase: 2.0 },
  { yBase: 590, amplitude: 22, frequency: 0.0038, phase: 3.5 },
  { yBase: 780, amplitude: 18, frequency: 0.0042, phase: 4.8 },
];

const layer3Configs: PathConfig[] = [
  { yBase: 100, amplitude: 30, frequency: 0.006, phase: 1.0 },
  { yBase: 320, amplitude: 35, frequency: 0.0055, phase: 2.8 },
  { yBase: 540, amplitude: 28, frequency: 0.0065, phase: 4.2 },
  { yBase: 740, amplitude: 24, frequency: 0.0058, phase: 5.5 },
];

export default function AnimatedBackground(): JSX.Element {
  const layer1Paths = useMemo(
    () => generateLayerPaths(5, layer1Configs),
    []
  );
  const layer2Paths = useMemo(
    () => generateLayerPaths(4, layer2Configs),
    []
  );
  const layer3Paths = useMemo(
    () => generateLayerPaths(4, layer3Configs),
    []
  );

  return (
    <div className="animated-bg" aria-hidden="true">
      <svg
        className="wave-layer wave-layer-1"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {layer1Paths.map((d, i) => (
          <path key={`l1-${i}`} d={d} className="wave-path wave-path-dim" />
        ))}
      </svg>
      <svg
        className="wave-layer wave-layer-2"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {layer2Paths.map((d, i) => (
          <path key={`l2-${i}`} d={d} className="wave-path wave-path-mid" />
        ))}
      </svg>
      <svg
        className="wave-layer wave-layer-3"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {layer3Paths.map((d, i) => (
          <path key={`l3-${i}`} d={d} className="wave-path wave-path-bright" />
        ))}
      </svg>
    </div>
  );
}
