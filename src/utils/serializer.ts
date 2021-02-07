const RoomSeparator = '|'
const GuestTypeSeparator = ':'
const ChildrenAgeSeparator = ','

export const deserialize: (token: string) => RoomData[] = token => {
  const roomTokens = token.split(RoomSeparator)
  const rooms = roomTokens
    .map(str => str.split(GuestTypeSeparator))
    .map<RoomData>(([adults, children]) => ({
      adults: +adults,
      children: children?.split(ChildrenAgeSeparator).map(Number) ?? []
    }))

  return rooms
}

export const serialize: (rooms: RoomData[]) => string = rooms =>
  rooms
    .map(({ adults, children }) =>
      [adults, children.join(ChildrenAgeSeparator)]
        .filter(Boolean)
        .join(GuestTypeSeparator)
    )
    .join(RoomSeparator)
