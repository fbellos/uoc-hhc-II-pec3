/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import $ from 'jquery';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

$('#nav-bar').on('click',function() {
  if($('#nav-bar').attr('aria-expanded') === 'true'){
    $('#nav-bar').attr('aria-expanded', 'false');
    $('#navbar-default').removeClass('w-full md:block md:w-auto');
    $('#navbar-default').addClass('w-full md:block md:w-auto hidden');
  } else {
    $('#nav-bar').attr('aria-expanded', 'true');
    $('#navbar-default').removeClass('w-full md:block md:w-auto hidden');
    $('#navbar-default').addClass('w-full md:block md:w-auto');
  }
});