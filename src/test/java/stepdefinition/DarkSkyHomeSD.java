package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.DarkSkyHome;
import utils.BasePage;

public class DarkSkyHomeSD {

    private DarkSkyHome darkSky = new DarkSkyHome();

    @Given("^I am on DarkSky HomePage$")
    public void verifyHomePage() throws InterruptedException {
        Assert.assertEquals(darkSky.getDarkSkyPageTitle(), "Dark Sky - Broadway, New York, NY");
    }

    @When ("^I entered (.+) in search box$")
     public void verifyChosenLocation(String location) throws InterruptedException {
            darkSky.chooseLocation(location);
            Assert.assertEquals(darkSky.getDarkSkyPageTitle(), "Dark Sky - E Kamm Ave, California");
            }

    @Then("^I verify timeline is displayed with two hours incremented$")
    public void verifyTimelineFormat() throws InterruptedException {
        Assert.assertTrue(darkSky.verifyHourFormat("America/Los_Angeles"), "Hours not displayed correctly");

    }
    @When("^I expand today's timeline$")
    public void expandToday(){
        darkSky.expandToday();
    }

    @Then("^I verify lowest and highest temp is displayed correctly$")
    public void verifyTempValues(){
        Assert.assertTrue(darkSky.verifyLowTemp(), "Lowest Temperature is not matching");
        Assert.assertTrue(darkSky.verifyHighTemp(), "Highest Temperature is not matching");
    }

}
