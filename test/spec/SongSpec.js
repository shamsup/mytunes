describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title: 'test song'
    });
    sinon.spy(model, 'trigger');
  });

  it('has a play method that triggers a "play" event', function() {
    model.play();
    expect(model.trigger).to.have.been.calledWith('play', model);
  });

  it('has an enqueue method that triggers an "enqueue" event', function() {
    model.enqueue();
    expect(model.trigger).to.have.been.calledWith('enqueue', model);
  });

  it('has a dequeue method that triggers a "dequeue" event', function() {
    model.dequeue();
    expect(model.trigger).to.have.been.calledWith('dequeue', model);
  });

  it('has an ended method that triggers an "ended" event', function() {
    model.play();
    model.ended();
    expect(model.trigger).to.have.been.calledWith('ended', model);
  });
});
