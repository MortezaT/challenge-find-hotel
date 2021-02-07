import { useEffect, useRef } from 'react'

export const useUpdateEffect: typeof useEffect = (callback, deps) => {
  const updateRef = useRef(false)

  useEffect(() => {
    if (!updateRef.current) {
      updateRef.current = true
      return
    }
    
    return callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
