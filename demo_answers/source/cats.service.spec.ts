import { Cats } from './cats.service';

describe('Cats', () => {
  var cats;
  beforeEach(function() {
    cats = new Cats();
  })
  it('is true', () => {
    expect(true).toEqual(true);
  });
  it('can get cats', function() {
    expect(cats.get()).toBeDefined();
  })
});
