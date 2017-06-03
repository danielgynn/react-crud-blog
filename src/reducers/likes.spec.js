import likes from './likes';

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(likes(undefined, {})).toBe(0);
    });

    it('should handle INCREMENT action', () => {
      expect(likes(1, { type: 'INCREMENT' })).toBe(2);
    });

    it('should handle DECREMENT action', () => {
      expect(likes(1, { type: 'DECREMENT' })).toBe(0);
    });

    it('should ignore unknown actions', () => {
      expect(likes(1, { type: 'unknown' })).toBe(1);
    });
  });
});
