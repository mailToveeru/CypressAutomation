import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTests {
    public static void main(String[] args) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        // Create a new instance of ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Navigate to the application's main screen
        driver.get("url_of_your_application");

        // Check if email and password fields are present
        WebElement emailInput = driver.findElement(By.id("email-input"));
        WebElement passwordInput = driver.findElement(By.id("password-input"));
        WebElement loginButton = driver.findElement(By.id("login-button"));

        // Perform tests based on the requirements
        // Test 1
        if (emailInput.isDisplayed() && passwordInput.isDisplayed() && loginButton.isDisplayed()) {
            System.out.println("Test 1 Passed: Email and password fields are present.");
        } else {
            System.out.println("Test 1 Failed: Email and password fields are not present.");
        }

        // Test 2
        emailInput.sendKeys("login@codility.com");
        passwordInput.sendKeys("valid_password");
        loginButton.click();

        WebElement successMessage = driver.findElement(By.cssSelector(".message.success"));
        if (successMessage.isDisplayed() && successMessage.getText().contains("Welcome to Codility")) {
            System.out.println("Test 2 Passed: Successful login message is visible.");
        } else {
            System.out.println("Test 2 Failed: Successful login message is not visible.");
        }

        // Repeat similar steps for other tests (3, 4, and 5)

        // Close the browser
        driver.quit();

        //tetst for fetch

        //Check fetch command how it works

        //Check fetch command how it works 2


    }
}