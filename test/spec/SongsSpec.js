describe('Songs', function() {
  describe('when fetching song data from Parse', function() {
    var songs, fakeSongData, fakeResponse, xhr, requests;

    beforeEach(function() {
      requests = [];
      xhr = sinon.useFakeXMLHttpRequest();
      xhr.onCreate = function(request) {
        requests.push(request);
      };

      fakeSongData = [
        {
          artist: 'Fakey McFakerson',
          title: 'Never Gonna Mock You Up',
          url: 'example/url'
        },
        {
          artist: 'BittyBacon',
          title: 'Sizzle Sundays',
          url: 'fake/url'
        }
      ];

      fakeResponse = JSON.stringify({ results: fakeSongData });
    });

    afterEach(function() {
      xhr.restore();
    });

    it('should GET song data from Parse when initialized', function() {
      songs = new Songs();
      expect(requests[0].method).to.equal('GET');
      expect(requests[0].url).to.include('https://api.parse.com/1/classes/songs');
    });

    it('should populate itself with the data returned from the Parse server', function() {
      songs = new Songs();
      requests[0].respond(200, { 'Content-Type': 'application/json' }, fakeResponse);
      expect(songs).to.have.length(2);
      expect(songs.at(0).get('title')).to.equal('Never Gonna Mock You Up');
      expect(songs.at(1).get('artist')).to.equal('BittyBacon');
    });

  });
});
