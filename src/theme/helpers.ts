export const createSpacing = (defaultSpacing: number) => {
    const spacing = (...args: number[]) => {
      if (!args.length) return defaultSpacing
      if (args.length < 2) return args[0] * defaultSpacing
  
      return [args.slice(0, 4).map(n => n * defaultSpacing)]
    }
    spacing.valueOf = () => defaultSpacing
  
    return spacing
  }
  