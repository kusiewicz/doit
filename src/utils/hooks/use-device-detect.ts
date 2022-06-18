import { useState, useEffect } from 'react';
import { MOBILE_DEVICE_BREAKPOINT, TABLET_DEVICE_BREAKPOINT } from '../../constants/devices';

interface DeviceDetectData {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}

export const useDeviceDetect = () => {
  const isClient = typeof window === 'object';

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize);
  const [deviceData, setDeviceData] = useState<DeviceDetectData>(() =>
    isClient
      ? {
          isMobile: window.innerWidth <= MOBILE_DEVICE_BREAKPOINT,
          isTablet:
            window.innerWidth > MOBILE_DEVICE_BREAKPOINT &&
            window.innerWidth <= TABLET_DEVICE_BREAKPOINT,
          isDesktop: window.innerWidth > TABLET_DEVICE_BREAKPOINT,
        }
      : {
          isMobile: false,
          isDesktop: false,
          isTablet: false,
        },
  );

  useEffect(
    () => {
      if (!isClient) {
        return undefined;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (windowSize.width) {
      if (windowSize.width <= MOBILE_DEVICE_BREAKPOINT) {
        setDeviceData({
          isMobile: true,
          isDesktop: false,
          isTablet: false,
        });
      } else if (
        windowSize.width >= MOBILE_DEVICE_BREAKPOINT &&
        windowSize.width <= TABLET_DEVICE_BREAKPOINT
      ) {
        setDeviceData({
          isMobile: false,
          isDesktop: false,
          isTablet: true,
        });
      } else {
        setDeviceData({
          isMobile: false,
          isDesktop: true,
          isTablet: false,
        });
      }
    }
  }, [windowSize.width]);

  return { deviceData, windowSize };
};
