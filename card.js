<div class="col-sm-4 pt-3">
    <div class="card" id="{{id}}">
        <img src="{{img}}" class="card-img-top" id="img-{{id}}">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text small" id="text-{{id}}">{{text}}</p>
            <h4 class="card-text" id="price-{{id}}">{{price}}</h4>
            <!-- <a href="{{link}}" class="btn btn-primary btn-lg">Choose</a> -->
            <div class="d-grid gap-2">
                <button id="btn-{{id}}" class="btn btn-success btn-lg choice-btn" type="button" data-text-swap="Remove"
                    data-text-original="Choose">Choose</button>
            </div>
        </div>
    </div>
</div>