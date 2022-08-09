const Engine = Matter.Engine
const Render = Matter.Render
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const Body = Matter.Body
const Composites = Matter.Composites
const Composite = Matter.Composite

var engine
var world
var ground
var fruit, rope
var fruit_con

function setup() {
  //cria o "fundo"
  createCanvas(500, 700)
  frameRate(80)
  engine = Engine.create()
  world = engine.world

  //cria o chão
  ground = new Ground(200, 680, 600, 20)

  //cria uma nova corda com 7 segmentos e na posição X/Y
  rope = new Rope(10, { x: 245, y: 30 })

  //cria a "bola"
  fruit = Bodies.circle(300, 300, 20)

  //adiciona fisica usando o matter.js
  Matter.Composite.add(rope.body, fruit)

  //cria um link entre a corda e a bola
  fruit_con = new Link(rope, fruit)

  rectMode(CENTER)
  ellipseMode(RADIUS)
  textSize(50)
}

function draw() {
  //cor do "fundo"
  background(51)

  //atualiza em tempo real a fisica
  Engine.update(engine)

  //desenha a corda
  rope.display()

  //desenha o chão
  ground.display()

  //desenha a "bola" com o tamanho X=30 e Y=30
  ellipse(fruit.position.x, fruit.position.y, 30, 30)
}
