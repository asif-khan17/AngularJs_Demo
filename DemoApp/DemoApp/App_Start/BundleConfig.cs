using System.Web;
using System.Web.Optimization;

namespace DemoApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/MyApp")
                .Include("~/Scripts/angular.js")
                 .Include("~/Scripts/app.js")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                );
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
