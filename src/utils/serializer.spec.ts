import { serialize, deserialize } from './serializer'

describe('test "deserialize" functionalities', () => {
  // it('should return empty array when deserializing empty token', () => {
  //   expect(deserialize('')).toBe([])
  // })
  const scenarios = [
    {
      serialized: '1',
      expectation: '1 room 1 adult no child',
      result: [{ adults: 1, children: [] }]
    },
    {
      serialized: '1:2,5',
      expectation: '1 room 1 adult 2 children 2 & 5 years old',
      result: [{ adults: 1, children: [2, 5] }]
    },
    {
      serialized: '1|1',
      expectation: '2 rooms, 1 adult each, no children',
      result: [
        { adults: 1, children: [] },
        { adults: 1, children: [] }
      ]
    },
    {
      serialized: '1:2,5|2',
      expectation: '2 room, 1 adult 2 children 2 & 5, 2 adults',
      result: [
        { adults: 1, children: [2, 5] },
        { adults: 2, children: [] }
      ]
    },
    {
      serialized: '3:2,5|5|2:0,5,3',
      expectation:
        '3 room, 3 adults 2 children 2 & 5, 5 adults, 2 adults 3 children 0,5, & 3 years old',
      result: [
        { adults: 3, children: [2, 5] },
        { adults: 5, children: [] },
        { adults: 2, children: [0, 5, 3] }
      ]
    }
  ]

  scenarios.forEach(({ serialized, expectation, result }) => {
    it(`should deserialize "${serialized}"to\t${expectation}`, () => {
      expect(deserialize(serialized)).toStrictEqual(result)
    })
  })
})

describe('test "serialize" functionalities', () => {
  // it('should return empty array when deserializing empty token', () => {
  //   expect(deserialize('')).toBe([])
  // })
  const scenarios = [
    {
      result: '1',
      description: '1 room 1 adult no child',
      deserialized: [{ adults: 1, children: [] }]
    },
    {
      result: '1:2,5',
      description: '1 room 1 adult 2 children 2 & 5 years old',
      deserialized: [{ adults: 1, children: [2, 5] }]
    },
    {
      result: '1|1',
      description: '2 rooms, 1 adult each, no children',
      deserialized: [
        { adults: 1, children: [] },
        { adults: 1, children: [] }
      ]
    },
    {
      result: '1:2,5|2',
      description: '2 room, 1 adult 2 children 2 & 5, 2 adults',
      deserialized: [
        { adults: 1, children: [2, 5] },
        { adults: 2, children: [] }
      ]
    },
    {
      result: '3:2,5|5|2:0,5,3',
      description:
        '3 room, 3 adults 2 children 2 & 5, 5 adults, 2 adults 3 children 0,5, & 3 years old',
      deserialized: [
        { adults: 3, children: [2, 5] },
        { adults: 5, children: [] },
        { adults: 2, children: [0, 5, 3] }
      ]
    }
  ]

  scenarios.forEach(({ deserialized, result }) => {
    it(`should serialize "${JSON.stringify(
      deserialized
    )}"to\t${result}`, () => {
      expect(serialize(deserialized)).toBe(result)
    })
  })
})
