<?php require_once "head.php" ?>
<body>
<?php require_once "nav.php" ?>

<div class="test-body">

    <div class="mq-info"><span>mq: </span></div>

    <div class="box"><h1>h1=<span class="font-size-h1">test</span> px: Lorem ipsum dolor sit amet.</h1></div>
    <div class="box"><h2>h2=<span class="font-size-h2">test</span> px: Lorem ipsum dolor sit amet.</h2></div>
    <div class="box"><h3>h3=<span class="font-size-h3">test</span> px: Lorem ipsum dolor sit amet.</h3></div>
    <div class="box"><p>p=<span class="font-size-p">test</span> px: Lorem ipsum dolor sit amet.</p></div>

    <div class="scale rem">
        <b>rem based only</b>
        <div class="parent">
            parent
            <div class="child">
                child
            </div>
        </div>
    </div>
    <div class="scale em">
        <b>em and rem mixed</b>
        <div class="parent">
            parent
            <div class="child">
                child
            </div>
        </div>
    </div>
</div>

</body>
</html>
