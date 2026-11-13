<?php
function inc(&$x) { $x++; }
function dobra($y) { $y *= 2; return $y; }

$a = 1;
inc($a);
$b = dobra($a);
$c = $b;
$c++;
echo $a, " ", $b, " ", $c, " ", intdiv(7, 2), " ", 7 % 3, " ", 7 / 2;
