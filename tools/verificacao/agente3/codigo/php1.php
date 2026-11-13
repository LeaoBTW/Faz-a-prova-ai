<?php
$saldos = ["ana" => 100, "bia" => 40, "caio" => 75];
$saldos["bia"] += 20;
$total = 0;
foreach ($saldos as $nome => $v) {
    if ($v >= 60) {
        $total += $v;
    }
}
echo count($saldos) . "-" . $total . "-" . strtoupper(substr("banestes", 2, 3));
