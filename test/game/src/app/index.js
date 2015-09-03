th.describe("app.Tweener", function() {

  th.it('init', function() {
    var shape = phina.display.CircleShape().addChildTo(this);
    var tweener = phina.app.Tweener(shape).addChildTo(this);
    tweener
      .to({x:320, y:480}, 1000)
  });

  th.it('to', function() {
    var shape = phina.display.RectangleShape().addChildTo(this);
    var tweener = phina.app.Tweener(shape).addChildTo(this);
    tweener
      .to({x:320, y:480}, 1000)
      .to({scaleX:4,scaleY:4, rotation:360}, 1000)
  });

  th.it('from', function() {
    var shape = phina.display.RectangleShape().addChildTo(this);
    shape.position.set(320, 480);
    var tweener = phina.app.Tweener(shape).addChildTo(this);
    tweener
      .from({scaleX:4,scaleY:4, rotation:360}, 1000)
  });

  th.it('wait', function() {
    var shape = phina.display.RectangleShape().addChildTo(this);
    var tweener = phina.app.Tweener(shape).addChildTo(this);
    tweener
      .to({x:320, y:480}, 1000)
      .wait(1000)
      .to({scaleX:4,scaleY:4, rotation:360}, 1000)
  });

  th.it('call', function() {
    var shape = phina.display.RectangleShape().addChildTo(this);
    var tweener = phina.app.Tweener(shape).addChildTo(this);
    tweener
      .to({x:320, y:480}, 1000)
      .call(function() {
        shape.style.color = 'red';
      })
      .to({scaleX:4,scaleY:4, rotation:360}, 1000)
      .call(function() {
        shape.style.color = 'blue';
      })
  });

  th.it('set', function() {
    var shape = phina.display.RectangleShape().addChildTo(this);
    var tweener = phina.app.Tweener(shape).addChildTo(this);
    tweener
      .to({x:320, y:480}, 1000)
      .set('rotation', 90)
      .set({scaleX:4, scaleY:4})
      .call(function() {
        shape.style.color = 'green';
      })
  });


});