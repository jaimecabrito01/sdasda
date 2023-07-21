const Home = () => {
    return (
        <div>
            <div class="container ">


<div class="row">
    <div class="col-md-6 offset-md-3">

    </div>
</div>

    <div class="col-md-6">
        <div class="btncha">
            <a href="{{ url_for('nivel_blueprint.nivel_1') }}" class="button button--piyo">
                <div class="button__wrapper">
                    <span class="button__text">ENTRY</span>
                </div>
                <div class="characterBox">
                    <div class="character wakeup">
                        <div class="character__face"></div>
                    </div>
                    <div class="character wakeup">
                        <div class="character__face"></div>
                    </div>
                    <div class="character">
                        <div class="character__face"></div>
                    </div>
                </div>
            </a>


        </div>
       


    </div>
    <div>
    </div>

</div>
       </div>
    )
}

export default Home